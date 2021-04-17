package hoohacks2021.hoohacks2021.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class TestController {

    @GetMapping("/api/helloworld")
    public String test() {
        return "hello world";
    }
}
