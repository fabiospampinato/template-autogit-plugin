
/* {{_ "upperCase" name}} */

const defaultOptions = {};

function factory ( options? ) {

  options = Object.assign ( {}, defaultOptions, options );

  return async function {{_ "camelCase" name}} ( config, repoPath, ctx, task ) {

    //TODO

    if ( config.skip ) return task.skip ();

    //TODO

  };

}

/* EXPORT */

export = Object.assign ( factory, { default: factory } );
