import { User } from 'entity';
import { NextFunction, Request, Response, Router } from 'express';
import { UserRepository } from 'repositories';

const UserController: Router = Router();

UserController.get('/', async (_req: Request, res: Response) => {
  const users = await UserRepository.getAll();
  res.status(200).send(users);
});

UserController.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const user = await UserRepository.getById(+id);

  if (user) {
    res.status(200).send(user);
  } else {
    next({ msg: 'TODO ERROR' });
  }
});

UserController.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const user: User = req.body;
  if (user) {
    const newUser = await UserRepository.createPost(user);
    res.status(201).send(newUser);
  } else {
    next({ msg: 'TODO ERROR' });
  }
});

export default UserController;
