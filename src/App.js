import logo from './logo.svg';

import './App.css';
import Old_useState from './Hooks/Use_State/Old_useState';
import Obj_useSatate from './Hooks/Use_State/Obj_useSatate';
import Array_useState from './Hooks/Use_State/Array_useState';
import Use_Effect1 from './Hooks/Use_Effects/Use_Effect1';
import Use_ref from './Hooks/Use_Ref/Use_ref';
import Useref_txt from './Hooks/Use_Ref/Useref_txt';
import Use_memo1 from './Hooks/Use_Memo/Use_memo1';
import Use_callback from './Hooks/Use_Callback/Use_callback';
import Profile from './Hooks/Use_Context/Profile';
import Footer from './Hooks/Use_Context/Footer';
import Reduse from './Hooks/Use_Reduse/Reduse';
import Use_LayoutEffect from './Hooks/Use Layout Effect/Use_LayoutEffect';

function App() {
  return (
    <div className="App">
      {/* USe State */}
      <h1>Use State</h1>
      <Old_useState />
      <hr />

      <Obj_useSatate />
      <hr />

      <Array_useState />

      <hr />
      {/* USe Effect */}
      <h1>Use Effect</h1>
      <Use_Effect1 />
      <hr />

      {/* Use_ref */}
      <h1>Use Ref</h1>
      <Use_ref></Use_ref>
      <Useref_txt />
      <hr />

      {/* Use Memo */}
      <h1>Use Memo</h1>
      <Use_memo1 />
      <hr />

      {/* Use Callback */}
      <h1>Use CallBack</h1>
      <Use_callback />
      <hr />

      {/* Use Context */}
      <h1>Use Context</h1>
      <Profile />
      <Footer />
      <hr />

      {/* Use Reduse */}
      <h1>Use Reduse</h1>
      <Reduse />
      <hr />

      {/* Use Layout Effect */}
      <h1>Use LayoutEffect</h1>
      <Use_LayoutEffect />
    </div>
  );
}

export default App;
