import type { Instructor } from "@prisma/client";
import { prisma } from "dbclient";

export function createInstructor({
    id,
    name,
    email,
    bio,
    socialLinks,
    teachingExperience,
    // classApplicationId
}: {
    id: string
    name: string
    email: string
    bio: string
    socialLinks: string
    teachingExperience: string
    // classApplicationId: string - need to figure out if this is needed or should be associated with a class(es)
}) {
    return prisma.instructor.create({
        data: {
            id,
            name,
            email,
            bio,
            socialLinks,
            teachingExperience,
            // classApplicationId
        }
    }

    )

}

export function getInstructor({
    id
}: {
    id: string
}) {
    return prisma.classApplication.findFirst({
        where: { id }
    });

}
