import { Inject, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Firestore } from '@google-cloud/firestore';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';

@Injectable()
export class EnrollmentsService {
  private collection: FirebaseFirestore.CollectionReference;

  constructor(@Inject('FIRESTORE') private readonly firestore: Firestore) {
    this.collection = this.firestore.collection('enrollment'); // cambia 'x' por el nombre de tu colección
  }

  async create(dto: CreateEnrollmentDto) {
    try {
      const docRef = await this.collection.add({
        ...dto,
        createdAt: new Date(),
      });
      return { id: docRef.id };
    } catch (error) {
      throw new InternalServerErrorException('Error creating document');
    }
  }

  async update(id: string, dto: UpdateEnrollmentDto) {
    const docRef = this.collection.doc(id);
    const doc = await docRef.get();
    if (!doc.exists) throw new NotFoundException(`Document with id ${id} not found`);
    await docRef.update({ ...dto });
    return { id };
  }

  async findAll() {
    const snapshot = await this.collection.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async findOne(id: string) {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) throw new NotFoundException(`Document with id ${id} not found`);
    return { id: doc.id, ...doc.data() };
  }

  async remove(id: string) {
    await this.collection.doc(id).delete();
    return { id };
  }
}
