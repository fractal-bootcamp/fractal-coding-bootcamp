import { prisma } from "~/.server/db";

export function createClass({
    id,
    schedule_options,
    name,
    description,
    location,
    class_size,
    schedule_constraints
}: {
    id: number,
    schedule_options: ScheduleOptions,
    name: string,
    description: string,
    location: string,
    class_size: number,
    schedule_constraints: string

}) {
    return prisma.class.create({
        data: {
            id,
            schedule_options,
            name,
            description,
            location,
            class_size,
            schedule_constraints
        }

    }

    )
    
}

export function getClass({
    id
})
{
    return prisma.class.findFirst({
        where: { id },
      });
    

}

enum ScheduleOptions {
    "weekday evenings",
    "weekday nights",
    "weekend mornings",
    "weekend afternoons",
    "weekend evenings"
}