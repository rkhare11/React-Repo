import React from 'react';
import { render } from 'react-dom';
import SkiDayCounter from './SkiDayCounter';

let  skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
};

render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal} />,
  document.getElementById('root')
);
