import useTimer from '../hooks/useTimer';
import TimerBoxComp from './TimerBoxComp';

function TimerComp() {
  const {
    day,
    hour,
    minute,
    second,
  } = useTimer();

  return (
    <div className="grid grid-cols-2 auto-rows-max gap-8 md:grid-cols-4 ">
      <TimerBoxComp value={day} label="days" />
      <TimerBoxComp value={hour} label="hours" />
      <TimerBoxComp value={minute} label="minutes" />
      <TimerBoxComp value={second} label="seconds" />
    </div>
  )
}

export default TimerComp;
