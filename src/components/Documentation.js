/* eslint-disable max-len */
import { EndpointHeader, Link, List, SecondaryHeader } from 'globalstyles/Text.styles';
import { Wrapper } from 'globalstyles/Wrapper.styles';
import React from 'react';

export const Documentation = () => {
  return (
    <Wrapper>
      <SecondaryHeader>Documentation</SecondaryHeader>
      <p>Bridget&apos;s Books is an API that allows users to fetch data about which books Bridget has read, wants to read, is currently reading, or did not finish.</p>

      <EndpointHeader>/bridgetsbooks</EndpointHeader>

      <List>
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
        <li>Use <Link href="https://project-express-api-jonj3fewvq-lz.a.run.app/bridgetsbooks">/bridgetsbooks</Link> </li>
      </List>
      <EndpointHeader>/bridgetsbooks/:isbn </EndpointHeader>
      <List>
        <li>methods: GET </li>
        <li>Matches exact ISBN numbers.</li>
        <li>Use <Link href="https://project-express-api-jonj3fewvq-lz.a.run.app/bridgetsbooks/:isbn">/bridgetsbooks/:isbn</Link> </li>
      </List>

    </Wrapper>
  )
}