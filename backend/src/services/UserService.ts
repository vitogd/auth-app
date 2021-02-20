import { getCustomRepository, getRepository } from "typeorm";
import { User } from "../entity/User";
import { UserRepository } from "../repositories/UserRepository";

class UserService {
  private userRepository;

  async findAll(): Promise<User[]> {
    this.userRepository = getRepository(User);

    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    this.userRepository = getRepository(User);

    return await this.userRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<User> {
    this.userRepository = getCustomRepository(UserRepository);

    return this.userRepository.findByEmail(email);
  }

  async create(requestBody: Object): Promise<User> {
    this.userRepository = getRepository(User);

    const user = await this.userRepository.create(requestBody);
    await this.userRepository.save(user);

    return user;
  }

  async update(id: string, requestBody: Object): Promise<User | boolean> {
    this.userRepository = getRepository(User);

    const users = await this.userRepository.update(id, requestBody);

    if (users.affected >= 1) {
      const userUpdated = await this.findOne(id);
      userUpdated.hashPassword();
      this.save(userUpdated);

      return userUpdated;
    }

    return false;
  }

  async delete(id: string): Promise<boolean> {
    this.userRepository = getRepository(User);

    const users = await this.userRepository.delete(id);

    if (users.affected >= 1) {
      return true;
    }

    return false;
  }

  async save(user: User): Promise<void> {
    this.userRepository = getRepository(User);

    await this.userRepository.save(user);
  }
}

export default new UserService();
