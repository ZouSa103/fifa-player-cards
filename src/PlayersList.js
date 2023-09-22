import React, { useState } from "react";
import Player from "./Player";
import PaginationComponent from "./PaginationComponent"; // Assurez-vous que l'importation est correcte
import playersData from "./players"; // Assurez-vous que le chemin est correct

const ITEMS_PER_PAGE = 4; // Nombre de joueurs par page

const PlayersList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPlayers = playersData.length;
  const totalPages = Math.ceil(totalPlayers / ITEMS_PER_PAGE);

  // Fonction pour gérer le changement de page
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // les joueurs pour la page actuelle
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const playersToShow = playersData.slice(startIndex, endIndex);

  return (
    <div>
      {playersToShow.map((player) => (
        <Player key={player.id} {...player} /> // Utilisez l'ID unique du joueur comme clé
      ))}
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PlayersList;
