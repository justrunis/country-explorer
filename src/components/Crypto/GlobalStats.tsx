import { GlobalCrypto } from "../../utils/types";
import GlobalStatCard from "./GlobalStatCard";
import { formatNumber } from "../../utils/lib";

interface GlobalDataProps {
  globalData: GlobalCrypto;
}

const GlobalStats: React.FC<GlobalDataProps> = ({ globalData }) => {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlobalStatCard
          title="Total Market Cap"
          value={formatNumber(globalData.total_mcap)}
        />
        <GlobalStatCard
          title="All Time High Market Cap"
          value={formatNumber(+globalData.mcap_ath)}
          color="text-red-600"
        />
        <GlobalStatCard
          title="Total Volume"
          value={formatNumber(globalData.total_volume)}
        />
        <GlobalStatCard
          title="All Time High Volume"
          value={formatNumber(+globalData.volume_ath)}
          color="text-blue-600"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GlobalStatCard
          title="Market Cap Change"
          value={`${globalData.mcap_change}%`}
          color={
            Number(globalData.mcap_change) >= 0
              ? "text-green-600"
              : "text-red-600"
          }
        />
        <GlobalStatCard
          title="Volume Change"
          value={`${globalData.volume_change}%`}
          color={
            Number(globalData.volume_change) >= 0
              ? "text-green-600"
              : "text-red-600"
          }
        />
        <GlobalStatCard
          title="Average Change %"
          value={`${globalData.avg_change_percent}%`}
          color={
            Number(globalData.avg_change_percent) >= 0
              ? "text-green-600"
              : "text-red-600"
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlobalStatCard
          title="Bitcoin Dominance"
          value={`${globalData.btc_d}%`}
          color="text-yellow-500"
        />
        <GlobalStatCard
          title="Ethereum Dominance"
          value={`${globalData.eth_d}%`}
          color="text-purple-500"
        />
      </div>
    </div>
  );
};

export default GlobalStats;
