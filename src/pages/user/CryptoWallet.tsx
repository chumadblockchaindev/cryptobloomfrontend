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
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { state } = useLocation();

    useEffect(() => {
        fetchWallets();
    }, []);

    const fetchWallets = async () => {
        setLoading(true);
        try {
            const response = await api.get("/api/admin/crypto-wallets/");
            setWallets(response.data);
        } catch (error) {
            console.error("Error fetching wallets:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleRetrieveWallet = (selectedCoin: string) => {
        const selected_wallet = wallets.filter(value => value.coin === selectedCoin)[0];
        setSelectedWallet(selected_wallet.wallet_address);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(selectedWallet);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);  // Reset copied status after 2 seconds
    };

    if (loading) {
        return <div className="text-center py-10">Loading wallets...</div>;
    }

    return (
        <div className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Crypto Payment</h2>
            {selectedWallet && (
                <div>
                    <p className="font-medium mb-4">
                        Send ${state.amount} to the wallet address below in the {selectedCoin} Network. Any coin sent to a different network will be lost.
                    </p>
                </div>
            )}
            <label className="mt-4 block">Choose a Coin:</label>
            <select
                className="w-full border p-2 rounded-md mb-4"
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
                    <p className="font-semibold mb-4">Wallet Address:</p>
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="text"
                            className="break-all border p-2 rounded-md w-3/4"
                            value={selectedWallet}
                            readOnly
                        />
                        <button
                            className="bg-black text-white p-2 font-medium rounded-2xl"
                            onClick={handleCopy}
                        >
                            {isCopied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                    <QRCodeSVG value={selectedWallet} size={150} className="mt-4 mx-auto" />
                </div>
            )}
        </div>
    );
};

export default CryptoWallet;
