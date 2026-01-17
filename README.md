npx prisma generate : type generate kore 
npx prisma migrate : database er sathe connect 
 npx prisma studio


 schema shikhar jonno documentaion er ORM e jabo 
    overview 
    datamodel->models -> relations ->here is the example 
    model User {
  id       Int       @id @default(autoincrement())
  name     String
  email    String    @unique
  posts    Post[]
  profiles Profile?
}

model Profile {
  id          Int       @id @default(autoincrement())
  bio         String?
  dateOfBirth DateTime?
  userId      Int       @unique
  user        User      @relation(fields: [userId], references: [id])
}

model Post {
  id          Int      @id @default(autoincrement())
  title       String
  content     String?
  isPublished Boolean  @default(false)
  createdAt   DateTime @default(now())
  updateAt    DateTime @updatedAt
  authorId Int
  author   User @relation(fields: [authorId], references: [id])
}

-->how to fix role ? or enum value 
