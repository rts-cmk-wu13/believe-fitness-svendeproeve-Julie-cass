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

export default function CreateClassForm({userId}) {
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

                    <input name="classDay" id="classDay" placeholder="Class day..." />
                </div>

                <div>
                    <label htmlFor="classTime">time</label>
                    <input type="text" name="classTime" id="classTime" placeholder="Class time..." />
                </div>

                <div>
                    <label htmlFor="trainer">trainer</label>
                    <input type="text" id="trainer" value="" placeholder="Class trainer..." />
                </div>

                <div>
                    <label htmlFor="MaxParicipants">Max Paricipants</label>
                    <input type="text" name="MaxParicipants" id="MaxParicipants" placeholder="Max participants in class..." />

                </div>
                <div>
                    <label htmlFor="asset">chose picture</label>
                    <input type="file" name="asset" id="Image" placeholder="Max participants in class..." />

                </div>
                <button type="submit"> Create</button>
            </form>
        </div>
    )
}