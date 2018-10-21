package spring;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;

@RestController
public class UsersController {
    @Autowired
    private UsersRepository userRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping ("/users")
    public List<Users> getAll() {
        return userRepository.findAll();
    }
}