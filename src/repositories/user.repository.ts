import { User } from 'entity';
import { getRepository } from 'typeorm';

export async function getAll(): Promise<User[]> {
  const data = await getRepository(User).find();
  return data;
}

export async function getById(id: number): Promise<User | undefined> {
  const data = await getRepository(User).findOne(id);
  return data;
}

export async function createPost(user: User): Promise<User> {
  const newUser = getRepository(User).create(user);
  await getRepository(User).save(newUser);
  return newUser;
}
