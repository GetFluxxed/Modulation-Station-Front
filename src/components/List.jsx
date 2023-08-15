import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

export default function List() {
    return (
        <div class='header'>
            This is the beginning of a rendered list of items
            <ol>
                <li>
                    Item
                </li>
                <li>
                    Item
                </li>
                <li>
                    Item
                </li>
                <li>
                    Item
                </li>
            </ol>
        </div>

    )
}