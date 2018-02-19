import {Controller, Get} from "routing-controllers";

@Controller()
export class TestController {
    @Get("/")
    getAll() {
        return "Hello world!";
    }
}
