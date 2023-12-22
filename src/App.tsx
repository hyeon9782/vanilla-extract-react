import Select from "./components/Forms/Select/Select";
import FunnelPage from "./pages/FunnelPage";

const options = ["빨강", "파랑", "초록"];

function App() {
  return (
    <div>
      <Select placeholder="과일을 선택해주세요." options={options} />
      <FunnelPage />
    </div>
  );
}

export default App;
