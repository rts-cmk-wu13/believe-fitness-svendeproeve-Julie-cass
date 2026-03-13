"use client";

import { useActionState } from "react";

import { CreateClass } from "@/lib/classes";

const initialState = {
    className: null,
    classDescription: null,
    classDay: null,
    classTime: null,
    maxParticipants: null,
    trainer: {
        id: null,
        trainerName: null,
    },
    asset: null
}

export default function CreateClassForm({ userId, trainers }) {
    const [state, formAction, isPending] = useActionState(CreateClass, initialState)


    return (
        <div className="p-5">
            <h1 className="text-3xl text-bold mb-4">Create new Class</h1>
            <form action={formAction}>

                <div>
                    <label htmlFor="className">className</label>
                    <input type="text" name="className" id="className" placeholder="Class name..." />
                </div>

                <div>
                    <label htmlFor="classDescription">classDescription</label>
                    <textarea name="classDescription" id="classDescription" placeholder="Class description..."></textarea>
                </div>

                <div>
                    <label htmlFor="classDay">Weekday</label>
                    <select name="classDay" id="classDay">
                        <option value="">Weekday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>

                </div>

                <div>
                    <label htmlFor="classTime">time</label>
                    <input type="text" name="classTime" id="classTime" placeholder="Class time..." />
                </div>

                <div>
                    <label htmlFor="trainer">Trainer</label>
                    <select name="trainerId" id="trainer">
                        <option value="">Select trainer</option>
                        {trainers.map((trainer) => (
                            <option key={trainer.id} value={trainer.id}>
                                {trainer.trainerName}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="MaxParicipants">Max Paricipants</label>
                    <input type="number" name="maxParticipants" id="maxParticipants" placeholder="Max participants..." />
                </div>
                <div>
                    <label htmlFor="asset">Class Image</label>
                    <input type="file" name="asset" id="asset" />
                </div>
                <button type="submit"> Create</button>
            </form>
        </div>
    )
}