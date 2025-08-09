import { Inject, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Firestore } from '@google-cloud/firestore';
import { CreateCourseSubjectDto } from './dto/create-course-subject.dto';
import { UpdateCourseSubjectDto } from './dto/update-course-subject.dto';

@Injectable()
export class CourseSubjectsService {
  private collection: FirebaseFirestore.CollectionReference;

  constructor(@Inject('FIRESTORE') private readonly firestore: Firestore) {
    this.collection = this.firestore.collection('course-subjects');
  }


  async create(createCourseSubjectDto: CreateCourseSubjectDto) {
    const docRef = await this.collection.add({
      ...createCourseSubjectDto,
      createdAt: new Date().toISOString(),
    });
    return { id: docRef.id, ...createCourseSubjectDto };
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

  async update(id: string, updateCourseDto: UpdateCourseSubjectDto) {
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
