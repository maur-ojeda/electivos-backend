import { Inject, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Firestore } from '@google-cloud/firestore';
import { CreatePeriodDto } from './dto/create-period.dto';
import { UpdatePeriodDto } from './dto/update-period.dto';

@Injectable()
export class PeriodsService {
  private collection: FirebaseFirestore.CollectionReference;

  constructor(@Inject('FIRESTORE') private readonly firestore: Firestore) {
    this.collection = this.firestore.collection('periods');
  }

  async create(dto: CreatePeriodDto) {
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

  async update(id: string, dto: UpdatePeriodDto) {
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
