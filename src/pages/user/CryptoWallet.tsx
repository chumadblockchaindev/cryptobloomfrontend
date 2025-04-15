import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import api from "@/api";
import { useLocation } from "react-router-dom";

interface Wallet {
    id: number;
    coin: string;
    wallet_address: string;
}

const CryptoWallet: React.FC = () => {
    const [wallets, setWallets] = useState<Wallet[]>([]);
    const [selectedCoin, setSelectedCoin] = useState<string>("BTC");
    const [selectedWallet, setSelectedWallet] = useState<string>("");
    const {state} = useLocation()

    console.log(state)
    useEffect(() => {
        fetchWallets();
    }, []);

    const fetchWallets = async () => {
        try {
            const response = await api.get("/api/admin/crypto-wallets/");
            console.log(response)
            setWallets(response.data);
        } catch (error) {
            console.error("Error fetching wallets:", error);
        }
    };

    const handleRetrieveWallet = (selectedCoin: string) => {
        const selected_wallet = wallets.filter(value => value.coin == selectedCoin)[0] 
        setSelectedWallet(selected_wallet.wallet_address)
    };

    return (
        <div className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-md">
            <h2 className="text-2xl font-semibold text-center">Crypto Payment</h2>
            <div> 
             {selectedWallet && <p className="font-medium">Send ${state.amount} to the wallet address below in {selectedCoin} Network
                Any coin sent to a different network would be lost
                </p>}
            </div>
            <label className="mt-4 block">Choose a Coin:</label>
            <select
                className="w-full border p-2 rounded-md"
                value={selectedCoin}
                onChange={(e) => setSelectedCoin(e.target.value)}
            >
                {wallets.map((wallet) => (
                    <option key={wallet.id} value={wallet.coin}>
                        {wallet.coin}
                    </option>
                ))}
            </select>
            <button
                className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full"
                onClick={() => handleRetrieveWallet(selectedCoin)}
            >
                Retrieve Wallet
            </button>

            {selectedWallet && (
                <div className="mt-6 text-center">
                    <p className="font-semibold">Wallet Address:</p>
                    <div className="flex">
                        <input type="text" className="break-all border w-full py-2" value={selectedWallet} /> 
                        <button className="rounded-2xl bg-black text-white p-2 font-medium">Copy</button>
                    </div>
                    <QRCodeSVG value={selectedWallet} size={150} className="mt-4 mx-auto" />
                </div>
            )}
        </div>
    );
};

export default CryptoWallet;
