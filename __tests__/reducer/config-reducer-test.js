import reducer from '../../src/reducers/config-reducer.js';
import {FETCH_CONFIG,ON_CHANGE_METRIC_TYPE,ON_CHANGE_NORMAL_BTN} from '../../src/actions/types';
import {onChangeMetricType} from '../../src/actions';
describe('Quotes reducer', () => {
    it('returns proper initial state', () => {
      expect(reducer(undefined, {metricType:'',config:null,selectedIndex:0,selectedBtnIndex:0,buttonTitle:'',aggType:null})).toEqual({metricType:'',config:null,selectedIndex:0,selectedBtnIndex:0,buttonTitle:'',aggType:null});
    })
    // ,
    // it('Selected default metric', () => {
    //   expect(reducer(undefined, {state:{metricType:action.payload.metricType,selectedIndex:action.payload.selectedIndex},type:ON_CHANGE_METRIC_TYPE})).toEqual({metricType:"Count",selectedIndex:0});
    // });
});