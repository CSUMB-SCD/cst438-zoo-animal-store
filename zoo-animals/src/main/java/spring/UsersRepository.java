package spring;

import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

@Repository
interface UsersRepository extends MongoRepository<Users, String> {
    Users findByusername(String username);
}