// Add a Featured category section at the top of the catalog
window.OPENSHIFT_CONSTANTS.CATALOG_CATEGORIES.unshift({
  // Required.  Must be unique
  id: "featured",
  // Required
  label: "Cluster",
  // Optional.  If specified, each item in the category will utilize this icon
  // as a default
  iconClassDefault: "fa fa-code",
  items: [
    {
      // Required.  Must be unique
      id: "hadoop",
      // Required
      label: "hadoop-cluster",
      // Optional.  If specified, defines a unique icon for this item
      iconClass: "font-icon icon-hadoop",
      // Optional.  If specified, will display below the item label
      description: "An open source hadoop-cluster. Create hadoop-master and hadoop-slave"
    },
    {
      // Required.  Must be unique
      id: "spark",
      // Required
      label: "spark-cluster",
      // Optional.  If specified, defines a unique icon for this item
      iconClass: "font-icon icon-nginx",
      // Optional.  If specified, will display below the item label
      description: "An open source spark-cluster. Create spark-master and spark-slave"
    },
    {
      // Required.  Must be unique
      id: "mpi",
      // Required
      label: "mpi-cluster",
      // Optional.  If specified, defines a unique icon for this item
      iconClass: "font-icon icon-angularjs",
      // Optional.  If specified, will display below the item label
      description: "An open source mpi-cluster. Create mpi-master and mpi-slave"
    }
  ]
});




