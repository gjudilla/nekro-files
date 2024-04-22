import StageI_1 from './objectives/StageI_1';
import StageI_2 from './objectives/StageI_2';
import StageI_3 from './objectives/StageI_3';
import StageI_4 from './objectives/StageI_4';
import StageI_5 from './objectives/StageI_5';
import StageII_1 from './objectives/StageII_1';
import StageII_2 from './objectives/StageII_2';
import StageII_3 from './objectives/StageII_3';
import StageII_4 from './objectives/StageII_4';
import StageII_5 from './objectives/StageII_5';

function PublicObjectives() {
    return (
        <div className="bg-white bg-opacity-25 p-4 h-full rounded-lg">
            <h2 className='text-xl font-bold text-white'>Public Objectives</h2>
            <div className="grid grid-cols-10 gap-4">
                <div className="col-span-1 rounded-lg">
                    <StageI_1 className="rounded-lg"/>
                </div>
                <div className="col-span-1">
                    <StageI_2 />
                </div>
                <div className="col-span-1">
                    <StageI_3 />
                </div>
                <div className="col-span-1">
                    <StageI_4 />
                </div>
                <div className="col-span-1">
                    <StageI_5 />
                </div>
                <div className="col-span-1">
                    <StageII_1 />
                </div>
                <div className="col-span-1">
                    <StageII_2 />
                </div>
                <div className="col-span-1">
                    <StageII_3 />
                </div>
                <div className="col-span-1">
                    <StageII_4 />
                </div>
                <div className="col-span-1">
                    <StageII_5 />
                </div>
            </div>
        </div>
        
    )
}

export default PublicObjectives;
