"use client";

export default function TrainerSearchComp({ Trainer }) {

    return (
        <>
            <div className="SearchTrainerBox">
                      <h2>Popular Trainers</h2>

                {Trainer.map((T) =>
                    <div className="SearchTrainerDiv" key={T.id}>
                        <img className="SearchTrainerImage" src={T.asset.url} alt="" />
                        <p className="SearchTrainerName">{T.trainerName}</p>
                    </div>
                )}

            </div>
        </>
    );
}