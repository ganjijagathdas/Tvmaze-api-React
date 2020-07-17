import React from "react";
import { RATING, COUNTRY, SHOW_TYPE, GENRES } from '../constants';

function ShowCard({ show }) {
  return (
    <div className="showcard_details">
      <div>
        <b>{RATING}</b><span>{show.rating.average}</span>
      </div>
      <div>
        <b>{COUNTRY}</b><span>{show.network.country.name}</span>
      </div>
      <div>
        <b>{SHOW_TYPE}</b><span>{show.type}</span>
      </div>
      <div>
        <b>{GENRES}</b><span>{show.genres}</span>
      </div>
    </div>
  );
}

export default ShowCard;
