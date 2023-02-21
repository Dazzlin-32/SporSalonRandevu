import addNotification from "react-push-notification";
 let data = [
  {
    id: 0,
    name: "Ermira",
    surname: "Zenuni",
    email: "ermirazenuni@gmail.com",
    password: "123454",
    addres: "Denizli, Turkey",
    motto : "No Pain -> No Gain!",
    telephone: "+90543219876",
    birthdate: "28-12-1999",
    img: './userpp.jpeg',
    type: "user",
    events : [
      {
        groupId: "gkickBok",
        title: "KickBox G",
        startTime: "08:00:00",
        endTime: "09:00:00",
        daysOfWeek: [3],
        startRecur: "2023-01-01",
        endRecur: "2023-03-01",
        type : 'group',
        color: '',
        schedule : false,
        coach: "Seyran Khitilova",

      },
      {
        groupId: "ikickBok",
        title: "KickBox I",
        startTime: "10:00:00",
        endTime: "11:00:00",
        daysOfWeek: [3],
        startRecur: "2023-01-01",
        endRecur: "2023-03-01",
        type : 'individual',
        color: '',
        schedule : false,
        coach: "Seyran Khitilova",
      },
      
      {
        groupId: "ifitness",
        title: "Fitness I",
        startTime: "12:00:00",
        endTime: "13:00:00",
        daysOfWeek: [2,7],
        startRecur: "2023-01-01",
        endRecur: "2023-03-01",
        type: 'individual',
        color: '',
        schedule : false,
        coach: "Sabina Suleimanova",
      },
      
      {
        groupId: "ibodyBuilding",
        title: "Body Building I",
        startTime: "14:00:00",
        endTime: "15:00:00",
        daysOfWeek: [4,6],
        startRecur: "2023-01-01",
        endRecur: "2023-03-01",
        type: 'individual',
        color: '',
        schedule : false,
        coach: "Sabina Suleimanova",
        
      },
      {
        groupId: "gbodyBuilding",
        title: "Body Building G",
        startTime: "14:00:00",
        endTime: "15:00:00",
        daysOfWeek: [4,],
        startRecur: "2023-01-01",
        endRecur: "2023-03-01",
        type: 'group',
        color: 'red',
        schedule : true,
        coach: "Seyran Khitilova",
      },
    ],
  },
  {
    id: 1,
    name: "Seyran",
    surname: "Khitilova",
    email: "seyrankhitilova@gmail.com",
    password: "123123",
    type: "coach",
    addres: "Denizli, Turkey",
    motto : "Progress Not Perfection",
    telephone: "+90543219876",
    birthdate: "04-03-2002",
    img: './userpp.jpeg',
    events : [
      {
        groupId: "gpilates",
        title: "Pilates G",
        description: "Group",
        startTime: "08:00:00",
        endTime: "09:00:00",
        daysOfWeek: [1],
        startRecur: "2023-01-01",
        endRecur: "2023-03-01",
        type: 'group',
        trainees : [ ],
        number: 0,
        limit : 10,
      },
      {
        groupId: "ipilates",
        title: "Pilates I",
        description: "Group",
        startTime: "11:00:00",
        endTime: "12:00:00",
        daysOfWeek: [1,2],
        startRecur: "2023-01-01",
        endRecur: "2023-03-01",
        type: 'individual',
        trainees : [ ],
        number: 0,
        limit : 1,
      },
      {
        groupId: "ikickBok",
        title: "KickBox I",
        startTime: "08:00:00",
        endTime: "09:00:00",
        daysOfWeek: [3],
        startRecur: "2023-01-01",
        endRecur: "2023-03-01",
        type : "individual",
        trainees : [ ],
        number: 0,
        limit : 1,
      },
      {
        groupId: "gkickBok",
        title: "KickBox G",
        startTime: "08:00:00",
        endTime: "09:00:00",
        daysOfWeek: [4],
        startRecur: "2023-01-01",
        endRecur: "2023-03-01",
        type : "group",
        trainees : [ ],
        number: 0,
        limit : 10,
      },
      {
        groupId: "gzumba",
        title: "Zumba G",
        startTime: "10:00:00",
        endTime: "11:00:00",
        daysOfWeek: [6],
        startRecur: "2023-01-01",
        endRecur: "2023-03-01",
        type : "group",
        trainees : [ ],
        number: 0,
        limit : 10,
      },
      {
        groupId: "gfitness",
        title: "Fitness G",
        startTime: "12:00:00",
        endTime: "13:00:00",
        daysOfWeek: [2],
        startRecur: "2023-01-01",
        endRecur: "2023-03-01",
        type: "group",trainees : [ ],
        number: 0,
        limit : 15,
      },
      {
        groupId: "gbodyBuilding",
        title: "Body Building G",
        startTime: "14:00:00",
        endTime: "15:00:00",
        daysOfWeek: [4],
        startRecur: "2023-01-01",
        endRecur: "2023-03-01",
        type: "group",
        trainees : ["Ermira"],
        number: 1,
        limit : 5,
      },
    ],
  },
  {
    id: 2,
    name: "Sekina",
    surname: "Sherif",
    email: "sekinsherif@gmail.com",
    password: "121212",
    type: "admin",
    addres: "Denizli, Turkey",
    motto : "Boss !",
    telephone: "+90543219876",
    birthdate: "02-07-1999",
    img: './userpp.jpeg',
    events:[
      {
      groupId: "gpilates",
      title: "Pilates G",
      description: "Group",
      startTime: "08:00:00",
      endTime: "09:00:00",
      daysOfWeek: [1],
      startRecur: "2023-01-01",
      endRecur: "2023-03-01",
      type: 'group',
      trainees : [ ],
      number: 0,
      coach: "Seyran Khitilova",
      limit : 10,
    },
    {
      groupId: "ipilates",
      title: "Pilates I",
      description: "Group",
      startTime: "11:00:00",
      endTime: "12:00:00",
      daysOfWeek: [1,2],
      startRecur: "2023-01-01",
      endRecur: "2023-03-01",
      type: 'individual',
      trainees : [ ],
      number: 0,
      coach: "Seyran Khitilova",
      limit : 1,
    },
    {
      groupId: "ikickBok",
      title: "KickBox I",
      startTime: "08:00:00",
      endTime: "09:00:00",
      daysOfWeek: [3],
      startRecur: "2023-01-01",
      endRecur: "2023-03-01",
      type : "individual",
      trainees : [ ],
      number: 0,
      coach: "Seyran Khitilova",
      limit : 1,
    },
    {
      groupId: "gkickBok",
      title: "KickBox G",
      startTime: "08:00:00",
      endTime: "09:00:00",
      daysOfWeek: [4],
      startRecur: "2023-01-01",
      endRecur: "2023-03-01",
      type : "group",
      trainees : [ ],
      number: 0,
      coach: "Seyran Khitilova",
      limit : 10,
    },
    {
      groupId: "gzumba",
      title: "Zumba G",
      startTime: "10:00:00",
      endTime: "11:00:00",
      daysOfWeek: [6],
      startRecur: "2023-01-01",
      endRecur: "2023-03-01",
      type : "group",
      trainees : [ ],
      number: 0,
      coach: "Seyran Khitilova",
      limit : 10,
    },
    {
      groupId: "gfitness",
      title: "Fitness G",
      startTime: "12:00:00",
      endTime: "13:00:00",
      daysOfWeek: [2],
      startRecur: "2023-01-01",
      endRecur: "2023-03-01",
      type: "group",
      trainees : [ ],
      number: 0,
      coach: "Seyran Khitilova",
      limit : 15,
    },
    {
      groupId: "ifitness",
      title: "Fitness I",
      startTime: "15:00:00",
      endTime: "16:00:00",
      daysOfWeek: [7],
      startRecur: "2023-01-01",
      endRecur: "2023-03-01",
      type: "individual",
      trainees : [ ],
      number: 0,
      coach : "Sabina",
      limit : 1,
    },
    {
      groupId: "ibodyBuilding",
      title: "Body Building I",
      startTime: "14:00:00",
      endTime: "15:00:00",
      daysOfWeek: [4,6],
      startRecur: "2023-01-01",
      endRecur: "2023-03-01",
      type: 'individual',
      trainees : [ ],
      number: 0,
      coach : "Sabina",
      limit : 1,
    },
    {
      groupId: "gbodyBuilding",
      title: "Body Building G",
      startTime: "14:00:00",
      endTime: "15:00:00",
      daysOfWeek: [4],
      startRecur: "2023-01-01",
      endRecur: "2023-03-01",
      type: "group",
      trainees : [ ],
      number: 0,
      coach: "Seyran Khitilova",
      limit : 5,
    },
    ],
  },
  {
    id: 3,
    name: "Sabina",
    surname: "Suleimanova",
    email: "sabinasuleimanova@gmail.com",
    password: "111222",
    type: "coach",
    addres: "Denizli, Turkey",
    motto : "BEAST MODE ON!",
    telephone: "+90512345678",
    birthdate: "10-07-1998",
    img: './userpp.jpeg',
    events :[
      {
        groupId: "ifitness",
        title: "Fitness I",
        description: "Individual",
        startTime: "15:00:00",
        endTime: "16:00:00",
        daysOfWeek: [7],
        startRecur: "2023-01-01",
        endRecur: "2023-03-01",
        type: 'individual',
        trainees : [ ],
        number: 0,
        limit : 1,
      },
      {
        groupId: "ibodyBuilding",
        title: "Body Building I",
        description: "Individual",
        startTime: "14:00:00",
        endTime: "15:00:00",
        daysOfWeek: [4,6],
        startRecur: "2023-01-01",
        endRecur: "2023-03-01",
        type: 'individual',
        trainees : [ ],
        number: 0,
        limit : 1,
      },
    ]
  },
];
export {data,bookUser};

const bookUser =(sportId, userId)=> {
  //console.log(data.map(datas => (data.events)))
  // console.log( data.events.filter(data.events.groupId === id))  data.events.map (event =>{ return event.groupId === id })
  // .push( book =>
  //   {
  //     if (data.id===0 && data.events.schedule === false)
  //       data.events.schedule(true)
  //   }

  // )
  // console.log( data.map(
  //   data => {
  //     return data.events.findIndex(
  //        event =>{ return event.groupId === id }
  //     )
      
  //   }
  // )
  // )
  // index number of the sport
  let index =  data.map(
    data => {
      return data.events.findIndex(
         event =>{ return event.groupId === sportId }
      )
    }
  )
  if(data[userId].events[index[0]].schedule === false) {
    changeuserSchedule(index,userId)
    bookingNotification(sportId)
    addTraineesCoach(index,userId,sportId)
  }
  else
   alreadyBookedNotification(sportId)
    
}
const changeuserSchedule = (index,userId,sportId)=>{
  data[userId].events[index[userId]].color='red'
  data[userId].events[index[0]].schedule = true
  console.log(data[userId].events[index[0]].schedule , data[userId].events[index[0]].color)
}
const bookingNotification = ( ) =>{
   return addNotification({
    title: 'Done',
    subtitle: 'Booking  Done',
    message: 'Booked',
    theme: 'darkblue',
    native: true, // when using native, your OS will handle theming.
    position: "top-middle",
})
}
const alreadyBookedNotification = () =>{
  
  return addNotification({
    title: 'Error',
    subtitle: 'Booking Not Done',
    message: 'You have already booked' ,
    theme: 'red',
    native: true, // when using native, your OS will handle theming.
    position: "top-middle",
})
}

const addTraineesCoach= (index,userId,sportId) =>{
 let coach = data[userId].events.find((e)=> {return e.groupId === sportId}).coach
 
}

