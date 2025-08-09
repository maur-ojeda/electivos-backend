import { Inject, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Firestore } from '@google-cloud/firestore';
import { CreateSubjectAttendanceDto } from './dto/create-subject-attendance.dto';
import { UpdateSubjectAttendanceDto } from './dto/update-subject-attendance.dto';

@Injectable()
export class SubjectAttendancesService {

  private collection: FirebaseFirestore.CollectionReference;

  constructor(@Inject('FIRESTORE') private readonly firestore: Firestore) {
    this.collection = this.firestore.collection('subject-attendances');
  }

  async create(createSubjectAttendanceDto: CreateSubjectAttendanceDto) {
    const {
      subjectId,
      studentId,
      attendedAt,
      status,
      wasLate = false,
      notes = '',
    } = createSubjectAttendanceDto;

    const docRef = await this.collection.add({
      subjectId,
      studentId,
      attendedAt: attendedAt ?? new Date().toISOString(),
      status,
      wasLate,
      notes,
    });

    return { id: docRef.id, subjectId, studentId, attendedAt, status, wasLate, notes };
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

  async update(id: string, updateCourseDto: UpdateSubjectAttendanceDto) {
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
