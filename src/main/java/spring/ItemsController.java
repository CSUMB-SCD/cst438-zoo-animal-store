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
public class ItemsController {
    @Autowired
    private ItemsRepository itemRepository;

    @GetMapping ("/allItems")
    public List<Items> getAll() {
        return itemRepository.findAll();
    }

    @GetMapping("/*")
    @RequestMapping(value = "/name/{name}", method = RequestMethod.GET)
    public Items getByName(@PathVariable("name") String name) {
        return itemRepository.findByname(name);
    }

    @GetMapping("/*")
    @RequestMapping(value = "/{itemNumber}", method = RequestMethod.GET)
    public Items getItemNumber(@PathVariable("itemNumber") int itemNumber) {
        return itemRepository.findByitemNumber(itemNumber);
    }

}