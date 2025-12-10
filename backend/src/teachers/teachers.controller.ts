import { Controller  , Get} from '@nestjs/common';

@Controller('teachers')
export class TeachersController {
    @Get()
    getAllTeachers() {
        return 'All teachers';
    }
}
    