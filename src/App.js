import * as React from 'react';
import './App.css';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
//import {scheduleData} from './datasource.json';
function App() {
  const data = [{
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    StartTime: new Date(2020, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30),
    IsAllDay: false
  }, {
    Id: 2,
    Subject: 'Blue Moon Eclipse',
    StartTime: new Date(2020, 1, 16, 12, 0),
    EndTime: new Date(2018, 1, 16, 13, 0),
    IsAllDay: false
  }];
  let scheduleObj;
  let buttonObj;
  const dataa = extend([], data, null, true);
  function onPopupOpen(args) {
    args.cancel = true;
  }

  let sidebarObj;
  let type = "Push";
  let showBackdrop = true;
  function onCreate() {
    sidebarObj.element.style.visibility = '';
  }
  // Toggle(Open/Close) the Sidebar
  function onClick() {
    sidebarObj.toggle();
  }
  // Close the Sidebar
  function closeClick() {
    sidebarObj.hide();
  }
  // function saveStateToLocalStorage(){ 
  //    localStorage.setItem('state', JSON.stringify(this.state)); 
  //  } 
  // <button onClick={this.saveStateToLocalStorage}> 
  //         Save State to local storage\ 
  //       </button> */
   function onAddClick(){
    let a={
       Id: 3,
             Subject: 'Testing-edited',
             StartTime: new Date(2018, 1, 11, 10, 0),
            EndTime: new Date(2018, 1, 11, 11, 0),
            IsAllDay: false
        
     };
  
   scheduleObj.addEvent(a);
  buttonObj.element.setAttribute('disabled', 'true');
  //     //  onClick=closeClick;
      
 }
  const services = ['Consult', 'Meeting', 'Advice', 'Checkup'];
  return (<div className='App1'>
    <div className='side'>
      <SidebarComponent id="default-sidebar" ref={Sidebar => sidebarObj = Sidebar} created={onCreate} style={{ visibility: "hidden" }} showBackdrop={showBackdrop} type={type} width='480px' position='Right' >
        <div className="title">
          <h6> Book an Appointment</h6>
          <h4> Dr. Adam H</h4>
        </div>
        <div className="center-align">
          <div className='dropone'> Choose a Service
            <DropDownListComponent id='ddelement' dataSource={services} placeholder="Select a service" />
          </div>
          <div className='name'> Enter Patient Name
            <TextBoxComponent placeholder='Enter Patient Name' />
          </div>
          <div className='dateTime'> Select a Date and Time
            <DateTimePickerComponent id='datetimepicker' placeholder='Select a date and time' />
          </div>
          <div className='footer'>
            <ButtonComponent id='save' className="e-btn save-btn" type='submit'  onClick={onAddClick}> Save </ButtonComponent>
            <ButtonComponent onClick={closeClick} id="close" className="e-btn close-btn">Cancel</ButtonComponent>
          </div>
        </div>
      </SidebarComponent>
    </div>
    <ScheduleComponent popupOpen={onPopupOpen} onClick={onClick} ref={t=>scheduleObj=t}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth]} />

    </ScheduleComponent>



  </div>

  );

}

export default App;
