
/* {{_ "upperCase" name}} */

const defaultOptions = {};

function factory ( customOptions?: Partial<typeof defaultOptions> ) {

  const options = Object.assign ( {}, defaultOptions, customOptions );

  return async function {{_ "camelCase" name}} ( config, repoPath, ctx, task ) {

    //TODO

    if ( config.skip ) return task.skip ();

    //TODO

  };

}

/* EXPORT */

export = Object.assign ( factory, { default: factory } );
