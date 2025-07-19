import { Inject, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Firestore } from '@google-cloud/firestore'; // o de 'firebase-admin/firestore' si usas firebase-admin
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';


@Injectable()
export class CoursesService {

   private collection: FirebaseFirestore.CollectionReference;

  constructor(@Inject('FIRESTORE') private readonly firestore: Firestore) {
    this.collection = this.firestore.collection('courses');
  }

  async create(createCourseDto: CreateCourseDto) {
    try {
      const docRef = await this.collection.add(createCourseDto);
      const createdCourse = await docRef.get();
      return { id: docRef.id, ...createdCourse.data() };
    } catch (error) {
      throw new InternalServerErrorException('Error creating course');
    }
  }

  async findAll() {
    const snapshot = await this.collection.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async findOne(id: string) {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    return { id: doc.id, ...doc.data() };
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const docRef = this.collection.doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }

    try {
      await docRef.update(JSON.parse(JSON.stringify(updateCourseDto)));
      const updatedDoc = await docRef.get();
      return { id: updatedDoc.id, ...updatedDoc.data() };
    } catch (error) {
      throw new InternalServerErrorException('Error updating course');
    }
  }

  async remove(id: string) {
    const docRef = this.collection.doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }

    try {
      await docRef.delete();
      return { message: `Course with id ${id} deleted successfully` };
    } catch (error) {
      throw new InternalServerErrorException('Error deleting course');
    }
  }
}
