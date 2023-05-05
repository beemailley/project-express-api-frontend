/* eslint-disable max-len */
import React from 'react';

export const Documentation = () => {
  return (
    <div>
      <h1>Documentation</h1>
      <p>Bridget&apos;s Books is an API that allows users to fetch data about which books Bridget has read, wants to read, is currently reading, or did not finish.</p>

      <h3>/bridgetsbooks</h3>
      <ul>
        <li>methods: GET </li>
        <li>Accepts the following query params:</li>
        <ul>
          <li>readstatus: filters by the read status</li>
          <ul>
            <li>The values of readstatus must be one of the following:</li>
            <ul>
              <li>read</li>
              <li>to-read</li>
              <li>currently-reading</li>
              <li>did-not-finish</li>
            </ul>
            <li>Example: /bridgetsbooks?readstatus=to-read</li>
          </ul>
          <li>author: filters by author name;</li>
          <ul>
            <li>This query accepts both exact author names and partial author names.</li>
            <li>Example: /bridgetsbooks?author=alice</li>
            <li>Example: /bridgetsbooks?author=Amrou Al-Kadhi</li>
          </ul>
        </ul>
      </ul>
      <h3>/bridgetsbooks/:isbn </h3>
      <ul>
        <li>methods: GET </li>
        <li>matches exact ISBN numbers</li>
      </ul>

    </div>
  )
}