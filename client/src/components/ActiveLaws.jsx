import Law_1 from './laws/Law_1';
import Law_2 from './laws/Law_2';
import Law_3 from './laws/Law_3';
import Law_4 from './laws/Law_4';
import Law_5 from './laws/Law_5';


function PublicObjectives() {
    return (
        <div className="bg-white bg-opacity-25 p-4 h-full rounded-lg">
            <h2 className='text-xl font-bold text-white'>Active Laws</h2>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-1">
                    <Law_1 />
                </div>
                <div className="col-span-1">
                    <Law_2 />
                </div>
                <div className="col-span-1">
                    <Law_3 />
                </div>
                <div className="col-span-1">
                    <Law_4 />
                </div>
                <div className="col-span-1">
                    <Law_5 />
                </div>
            </div>
        </div>
        
    )
}

export default PublicObjectives;
