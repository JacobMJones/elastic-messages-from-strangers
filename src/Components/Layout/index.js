import React, {useEffect} from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../Constants/routes'

import LandingPage from "../../Pages/HomePage";
import ReadPage from "../../Pages/ReadPage";
import CheckPage from "../../Pages/CheckPage";
import WritePage from "../../Pages/WritePage";
import { useStateValue } from "../../State/StateProvider";


function Layout() {
  const [{ page }, pageDispatch] = useStateValue();

  // useEffect(() => {
  //   console.log('layout effect', page)
  // },[page]);
  return (
    <React.Fragment>
   <Router>
    <div>

    {/* {page === 'home' && <HomePage/>}
      {page === 'read' && <ReadPage/>}
      {page === 'write' && <WritePage/>}
      {page === 'check' && <CheckPage/>} */}

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.READ} component={ReadPage} />
      <Route path={ROUTES.WRITE} component={WritePage} />
      <Route path={ROUTES.CHECK} component={CheckPage} />
    </div>
  </Router>

        {/* <Container>
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
     */}
    </React.Fragment>
  );
}
export default Layout;
