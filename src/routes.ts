import {Request, response, Response} from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(req: Request, res: Response) {

    CreateCourseService.execute({
            name: 'NodeJS', 
            duration: 10, 
            educator: 'Roberto'
    });

    return res.send();

}

