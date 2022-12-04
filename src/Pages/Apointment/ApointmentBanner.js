import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'
const ApointmentBanner = ({date, setDate}) => {
    // const [date, setDate] = useState(new Date());
    return (
        <div className="hero my-20 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair}  className="max-w-sm ml-20 margin-left rounded-lg shadow-2xl chair-img" alt='' />
                <div className='rounded-lg p-4 padding shadow-2xl'>
                    <DayPicker mode="single"
                        selected={date}
                        onSelect={setDate} />
                    <p>You have seleted:{format(date, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default ApointmentBanner;