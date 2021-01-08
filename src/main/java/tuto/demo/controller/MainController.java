package tuto.demo.controller;

import org.springframework.web.bind.annotation.*;
import tuto.demo.bean.AuthBean;
import tuto.demo.bean.helloBean;

//WebSecurityConfig olduğundan dolayı gerek yok (Spring security aktif olduğundan sanırım bunu yazınca çalışmıyor direk)
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MainController {

    @RequestMapping(path = "/userLogin")
    public AuthBean userAuth(){
        return new AuthBean("Logged in");

    }




    @RequestMapping(method = RequestMethod.GET, path = "/user/{uid}")
    public helloBean helloBeanWithUser(@PathVariable String uid){
        return new helloBean(String.format("Hello there general %s",uid));

    }
}
