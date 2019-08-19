import axios from "axios";

export default {

  getAllMessages: async cb => {
    let res = await axios({
      url: "http://localhost:8080/query",
      method: "get",
      timeout: 8000,
      headers: {
        "Content-Type": "application/json"
      }
    });
    const storedMessages = res.data.hits.hits.map((item, index) => {
      item._source.index = index;
      return item._source;
    });
    console.log("stored messages", storedMessages);
    cb({ type: "addMessages", newMessages: storedMessages });
  },

  getMessageById: async (id,cb) => {
console.log('get message by id', id)


      axios
        .post("http://localhost:8080/message-by-id", {
          id:id
        })
        .then(function(response) {
          console.log('im in response', response.data.hits.hits[0]._source.text);
          cb('message', response.data.hits.hits[0]._source.text)
          
        })
        .catch(function(error) {
          console.log(error);
        });
        
        
    
  },


  checkUsernameAvailability: async (cb, name) => {
    let res = await axios({
      url: `http://localhost:8080/check-username?name=${name}`,
      method: "get",
      timeout: 8000,
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (res.data.hits.hits.length === 0) {
      console.log("the name is available");
      return true;
    } else {
      console.log("the name is not available");
      return false;
    }
  },
  createNewUser: async (user,cb) => {
    console.log("in create new user", user);
    axios
      .post("http://localhost:8080/create-user", {
        id:
          user.dateCreated +
          Math.random()
            .toString(36)
            .substring(7),
        username: user.username,
        password: user.password,
        email: user.email,
        dateCreated: user.dateCreated,
        lastSeen: user.lastSeen,
        messages: user.messages,
        stats: user.stats,
        active:true
      })
      .then(function(response) {
        console.log('im in response', response);
        
        
      })
      .catch(function(error) {
        console.log(error);
      });
      cb({type:"addAuth", newAuth:user})
  }
};
