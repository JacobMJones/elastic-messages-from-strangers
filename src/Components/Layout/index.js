import React from "react";
import Input from "../Input/";
import Messages from "../Messages/";
import Stats from "../Stats/";
import Filter from "../Filter/";
import SignUp from "../Auth/SignUp"
import { useStateValue } from "../../State/StateProvider";
import {
  Container,
  Header,
  FilterLayout,
  MessageLayout,
  InputLayout,
  StatsLayout
} from "./styles";
function Layout() {
  const [{ auth }, authDispatch] = useStateValue();
  return (
    <React.Fragment>
      {!auth && <div><SignUp authDispatch={authDispatch}/></div>}

      {auth && (
        <Container>
          <Header>Messages from Strangers</Header>
          <StatsLayout>
            <Stats />
          </StatsLayout>
         
          <FilterLayout>
            <Filter />
          </FilterLayout>
              
          <InputLayout>
            <Input
              isReply={false}
              isReplyId={null}
              hasReply={false}
              hasReplyId={null}
            />
          </InputLayout>
        
          <MessageLayout>
            <Messages />
          </MessageLayout> 
        </Container>
      )}
    </React.Fragment>
  );
}
export default Layout;
