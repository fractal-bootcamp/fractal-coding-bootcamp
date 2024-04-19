import type { ClassApplication, ScheduleOptions } from "@prisma/client";
import { prisma } from "dbclient";

export function createClass({
    //schedule_options,
    name,
    //description,
    //location,
    //class_size,
    //schedule_constraints
}: {
    //schedule_options: ScheduleOptions,
    name: string,
    //description: string,
    //location: string,
    //class_size: number,
    //schedule_constraints: string

}) {
    return prisma.classApplication.create({
        data: {
            //schedule_options,
            name,
            //description,
            //location,
            //class_size,
            //schedule_constraints
        }

    }

    )

}

export function getClass({
    id
}: {
    id: string
}) {
    return prisma.classApplication.findFirst({
        where: { id },
    });


}

