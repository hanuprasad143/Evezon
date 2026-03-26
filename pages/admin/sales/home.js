import SalesProduce from "@/shared/data/dashboards/homepagebarpluslinechart";

export default function Home() {
  return (
    <main className="w-full min-h-screen p-4">
      <div className="box w-full">
        <div className="box-header">
          <div className="box-title">Sales</div>
        </div>

        <div className="box-body w-full">
          <div id="country-sessions" className="w-full">
            <SalesProduce />
          </div>
        </div>
      </div>
    </main>
  );
}