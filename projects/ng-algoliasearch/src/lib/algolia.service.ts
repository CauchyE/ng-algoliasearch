import { Injectable, Inject } from '@angular/core';
import algoliasearch from 'algoliasearch';
import { RequestOptions } from '@algolia/transporter';
import { SearchOptions } from '@algolia/client-search';
import { CONFIG, Config } from './config';

@Injectable({
  providedIn: 'root',
})
export class AlgoliaService {
  constructor(
    @Inject(CONFIG)
    private config: Config,
  ) {}

  /**
   *
   * @param indexName
   * @param query
   * @param options
   * @throws when config undefined
   */
  async search<T>(
    indexName: string,
    query: string,
    requestOptions?: RequestOptions & SearchOptions,
  ) {
    if (!this.config) {
      throw Error('config undefined');
    }

    const client = algoliasearch(
      this.config.app_id,
      this.config.search_api_key,
    );

    const index = client.initIndex(indexName);
    const res = await index.search<T>(query, requestOptions);

    return res;
  }
}
