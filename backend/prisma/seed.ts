import { PrismaClient, Role, CourseStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10);

  console.log('🌱 Starting database seeding...');

  // 1. Create Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@academy.com' },
    update: {},
    create: {
      email: 'admin@academy.com',
      name: 'Admin User',
      password: hashedPassword,
      role: Role.ADMIN,
      bio: 'System Administrator',
    },
  });

    const Eslam = await prisma.user.upsert({
    where: { email: 'Eslam@academy.com' },
    update: {},
    create: {
      email: 'Eslam@academy.com',
      name: 'Admin User',
      password: hashedPassword,
      role: Role.ADMIN,
      bio: 'System Administrator',
    },
  });

  console.log('✅ Admin created');

  // 2. Create Supervisor
  const supervisor = await prisma.user.upsert({
    where: { email: 'supervisor@academy.com' },
    update: {},
    create: {
      email: 'supervisor@academy.com',
      name: 'Supervisor Sarah',
      password: hashedPassword,
      role: Role.SUPERVISOR,
      bio: 'Course Coordinator',
    },
  });
  console.log('✅ Supervisor created');

  // 3. Create Teachers
  const teacher1 = await prisma.user.upsert({
    where: { email: 'teacher1@academy.com' },
    update: {},
    create: {
      email: 'teacher1@academy.com',
      name: 'John Doe',
      password: hashedPassword,
      role: Role.TEACHER,
      bio: 'Senior Web Development Instructor',
      phone: '+1234567891',
    },
  });

  const teacher2 = await prisma.user.upsert({
    where: { email: 'teacher2@academy.com' },
    update: {},
    create: {
      email: 'teacher2@academy.com',
      name: 'Jane Smith',
      password: hashedPassword,
      role: Role.TEACHER,
      bio: 'Expert UI/UX Designer',
      phone: '+1234567892',
    },
  });
  console.log('✅ Teachers created');

  // 4. Create Students
  const student1 = await prisma.user.upsert({
    where: { email: 'student1@academy.com' },
    update: {},
    create: {
      email: 'student1@academy.com',
      name: 'Alice Cooper',
      password: hashedPassword,
      role: Role.STUDENT,
    },
  });

  const student2 = await prisma.user.upsert({
    where: { email: 'student2@academy.com' },
    update: {},
    create: {
      email: 'student2@academy.com',
      name: 'Bob Marley',
      password: hashedPassword,
      role: Role.STUDENT,
    },
  });
  console.log('✅ Students created');

  // 5. Create Courses
  const course1 = await prisma.course.upsert({
    where: { title: 'Full Stack Web Development' },
    update: {
      sessions: {
        deleteMany: {},
        create: [
          {
            title: 'Introduction to Web Dev',
            date: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
            link: 'https://zoom.us/j/fs-web-dev-1',
          },
          {
            title: 'HTML & CSS Basics',
            date: new Date(Date.now() - 86400000).toISOString(), // Yesterday (Expired)
            link: 'https://zoom.us/j/fs-web-dev-2',
          },
          {
            title: 'JavaScript Fundamentals',
            date: new Date(Date.now() + 172800000).toISOString(), // In 2 days
            link: 'https://zoom.us/j/fs-web-dev-3',
          },
        ]
      }
    },
    create: {
      title: 'Full Stack Web Development',
      description: 'Master HTML, CSS, JavaScript, Node.js, and React.',
      category: 'Programming',
      price: 99.99,
      status: CourseStatus.PUBLISHED,
      zoomLinks: ['https://zoom.us/j/fs-web-dev'],
      teacherId: teacher1.id,
      sessions: {
        create: [
          {
            title: 'Introduction to Web Dev',
            date: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
            link: 'https://zoom.us/j/fs-web-dev-1',
          },
          {
            title: 'HTML & CSS Basics',
            date: new Date(Date.now() - 86400000).toISOString(), // Yesterday (Expired)
            link: 'https://zoom.us/j/fs-web-dev-2',
          },
          {
            title: 'JavaScript Fundamentals',
            date: new Date(Date.now() + 172800000).toISOString(), // In 2 days
            link: 'https://zoom.us/j/fs-web-dev-3',
          },
        ]
      }
    },
  });

  const course2 = await prisma.course.upsert({
    where: { title: 'Modern UI/UX Design' },
    update: {
      sessions: {
        deleteMany: {},
        create: [
          {
            title: 'Design Principles',
            date: new Date(Date.now() + 3600000).toISOString(), // In 1 hour
            link: 'https://zoom.us/j/uiux-design-1',
          },
        ]
      }
    },
    create: {
      title: 'Modern UI/UX Design',
      description: 'Learn to design beautiful and functional user interfaces.',
      category: 'Design',
      price: 79.99,
      status: CourseStatus.PUBLISHED,
      zoomLinks: ['https://zoom.us/j/uiux-design'],
      teacherId: teacher2.id,
      sessions: {
        create: [
          {
            title: 'Design Principles',
            date: new Date(Date.now() + 3600000).toISOString(), // In 1 hour
            link: 'https://zoom.us/j/uiux-design-1',
          },
        ]
      }
    },
  });

  const course3 = await prisma.course.upsert({
    where: { title: 'Advanced React patterns' },
    update: {
      sessions: {
        deleteMany: {},
        create: [
           {
            title: 'React Hooks Deep Dive',
            date: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago (Expired)
            link: 'https://zoom.us/j/adv-react-1',
          },
        ]
      }
    },
    create: {
      title: 'Advanced React patterns',
      description: 'Deep dive into React hooks, performance, and state management.',
      category: 'Programming',
      price: 59.99,
      status: CourseStatus.DRAFT,
      zoomLinks: ['https://zoom.us/j/adv-react'],
      teacherId: teacher1.id,
      sessions: {
        create: [
           {
            title: 'React Hooks Deep Dive',
            date: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago (Expired)
            link: 'https://zoom.us/j/adv-react-1',
          },
        ]
      }
    },
  });
  console.log('✅ Courses created');

  // 6. Enroll Students in Courses
  await prisma.course.update({
    where: { id: course1.id },
    data: {
      students: {
        connect: [{ id: student1.id }, { id: student2.id }],
      },
    },
  });

  await prisma.course.update({
    where: { id: course2.id },
    data: {
      students: {
        connect: [{ id: student1.id }, { id: student2.id }],
      },
    },
  });

  await prisma.course.update({
    where: { id: course3.id },
    data: {
      students: {
        connect: [{ id: student1.id }], // Only enroll student1 in the advanced course
      },
    },
  });

  console.log('✅ Student enrollments created');
  console.log('🌟 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
