//module.exports = () =>{
//    console.log('Akashi online');
//}


module.exports = async (client) => {
    client.Ready = true, 
    client.user.setPresence({
      status: "online",  // You can show online, idle, and dnd
      activity: {
          name: "Azur Lane",  // The message shown
          type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING,
      }
  });
}
