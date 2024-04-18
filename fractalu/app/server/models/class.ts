import type { ClassApplication } from "@prisma/client";
import { prisma } from "dbclient";

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
    return prisma.ClassApplication.create({
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
}: {
    id: number
}) {
    return prisma.ClassApplication.findFirst({
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