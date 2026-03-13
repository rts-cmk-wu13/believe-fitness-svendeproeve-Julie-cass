"use client";

import { useActionState } from "react";

import { CreateClass } from "@/lib/classes";
import "./NewClass.scss";

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
        <div className="NewClassFormContainer">
            <h1 className="NewClassTitle">Create a new Class</h1>
            <form className="NewClassForm" action={formAction}>

                <div className="NewClassInputBox">
                    <input className="NewClassInput" type="text" name="className" id="className" placeholder="Class name..." />
                </div>

                <div className="NewClassInputBox">
                    <textarea className="NewClassInput" name="classDescription" id="classDescription" placeholder="Class description..."></textarea>
                </div>

<div className="WeekDay-Time_container">
                <div className="NewClassInputBox">
                    <select className="NewClassInput" name="classDay" id="classDay">
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

                <div className="NewClassInputBox">
                    <input className="NewClassInput" type="text" name="classTime" id="classTime" placeholder="Class time..." />
                </div>
</div>
                <div className="NewClassInputBox">
                    <select className="NewClassInput" name="trainerId" id="trainer">
                        <option value="">Select trainer</option>
                        {trainers.map((trainer) => (
                            <option key={trainer.id} value={trainer.id}>
                                {trainer.trainerName}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="NewClassInputBox">
                    <input className="NewClassInput" type="number" name="maxParticipants" id="maxParticipants" placeholder="Max participants..." />
                </div>
                <div className="NewClassInputBox">
                    <label htmlFor="asset">Choose an image:</label>
                    <input className="NewClassInput" type="file" name="asset" id="asset" />
                </div>
                <button className="NewClassSubmitBtn" type="submit">CREATE CLASS</button>
            </form>
        </div>
    )
}