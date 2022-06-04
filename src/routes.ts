import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {

    CreateCourseService.execute({
        name: "Node.js",
        educator: "Dani",
        duration: 10
    });

    CreateCourseService.execute({
        name: "Node.js",
        educator: "Cristian Lunardi de Oliveira",
        duration: 24
    });

    return response.send();
};